import { useState, useEffect } from "react";
import useUser from "@/utils/useUser";
import {
  Calendar,
  Plus,
  Edit2,
  Trash2,
  X,
  Check,
  ArrowLeft,
} from "lucide-react";

export default function AdminBookingsPage() {
  const { data: user, loading: userLoading } = useUser();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  useEffect(() => {
    if (!userLoading && !user) {
      window.location.href = "/account/signin";
      return;
    }

    if (user) {
      fetchBookings();
    }
  }, [user, userLoading]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/bookings");
      if (res.ok) {
        const data = await res.json();
        setBookings(data.bookings);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchBookings();
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const updateBookingStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        fetchBookings();
      }
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getBookingsForDate = (date) => {
    return bookings.filter((booking) => {
      const start = new Date(booking.start_date);
      const end = new Date(booking.end_date);
      return date >= start && date <= end;
    });
  };

  const { daysInMonth, startingDayOfWeek, year, month } =
    getDaysInMonth(selectedMonth);

  if (userLoading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a1a1a] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/admin/dashboard" className="hover:text-[#D4AF37]">
                <ArrowLeft size={24} />
              </a>
              <div>
                <h1 className="text-3xl font-bold">Bookings Calendar</h1>
                <p className="text-gray-300 mt-1">Manage all reservations</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-[#D4AF37] hover:bg-[#C49B2C] rounded-lg transition-colors flex items-center space-x-2"
            >
              <Plus size={18} />
              <span>Add Booking</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Calendar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  setSelectedMonth(
                    new Date(
                      selectedMonth.getFullYear(),
                      selectedMonth.getMonth() - 1,
                    ),
                  )
                }
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Previous
              </button>
              <button
                onClick={() => setSelectedMonth(new Date())}
                className="px-4 py-2 bg-[#D4AF37] hover:bg-[#C49B2C] text-white rounded-lg"
              >
                Today
              </button>
              <button
                onClick={() =>
                  setSelectedMonth(
                    new Date(
                      selectedMonth.getFullYear(),
                      selectedMonth.getMonth() + 1,
                    ),
                  )
                }
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-700 py-2"
              >
                {day}
              </div>
            ))}

            {Array.from({ length: startingDayOfWeek }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="bg-gray-50 rounded-lg p-2 min-h-24"
              ></div>
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(year, month, day);
              const dayBookings = getBookingsForDate(date);
              const isToday = new Date().toDateString() === date.toDateString();

              return (
                <div
                  key={day}
                  className={`border rounded-lg p-2 min-h-24 ${isToday ? "bg-[#FFF9E6] border-[#D4AF37]" : "bg-white border-gray-200"}`}
                >
                  <div className="font-semibold text-sm mb-1">{day}</div>
                  <div className="space-y-1">
                    {dayBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className={`text-xs p-1 rounded ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                        title={`${booking.car_name} - ${booking.customer_name || "N/A"}`}
                      >
                        {booking.car_name.substring(0, 10)}...
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Bookings
          </h2>

          {loading ? (
            <p className="text-center py-8 text-gray-600">
              Loading bookings...
            </p>
          ) : bookings.length === 0 ? (
            <p className="text-center py-8 text-gray-600">No bookings yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      ID
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Car
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Customer
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Dates
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Days
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Total
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm">#{booking.id}</td>
                      <td className="py-3 px-4 font-medium">
                        {booking.car_name}
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-sm">
                            {booking.customer_name || "N/A"}
                          </p>
                          <p className="text-xs text-gray-600">
                            {booking.customer_phone || "N/A"}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <div>
                          <p>
                            {new Date(booking.start_date).toLocaleDateString()}
                          </p>
                          <p className="text-gray-600">
                            to {new Date(booking.end_date).toLocaleDateString()}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        {booking.total_days}
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        {booking.currency}
                        {booking.total_price}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={booking.status}
                          onChange={(e) =>
                            updateBookingStatus(booking.id, e.target.value)
                          }
                          className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
