import { useState, useEffect } from "react";
import useUser from "@/utils/useUser";
import {
  Calendar,
  Car,
  DollarSign,
  Clock,
  TrendingUp,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const { data: user, loading: userLoading } = useUser();
  const [stats, setStats] = useState(null);
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userLoading && !user) {
      window.location.href = "/account/signin";
      return;
    }

    if (user) {
      fetchData();
    }
  }, [user, userLoading]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const [statsRes, bookingsRes] = await Promise.all([
        fetch("/api/bookings/stats"),
        fetch("/api/bookings"),
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData.stats);
      }

      if (bookingsRes.ok) {
        const bookingsData = await bookingsRes.json();
        setRecentBookings(bookingsData.bookings.slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

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
            <div>
              <h1 className="text-3xl font-bold">
                <span className="text-[#D4AF37]">MOKAFIH</span> Admin Dashboard
              </h1>
              <p className="text-gray-300 mt-1">Welcome back, {user.email}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="/"
                className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors"
              >
                View Website
              </a>
              <a
                href="/account/logout"
                className="px-4 py-2 bg-[#D4AF37] hover:bg-[#C49B2C] rounded-lg transition-colors flex items-center space-x-2"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/admin/bookings"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-[#D4AF37]"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FFF9E6] rounded-full flex items-center justify-center">
                  <Calendar className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    View Bookings Calendar
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Manage all reservations
                  </p>
                </div>
              </div>
            </a>

            <a
              href="/cars"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-[#D4AF37]"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FFF9E6] rounded-full flex items-center justify-center">
                  <Car className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    View All Cars
                  </h3>
                  <p className="text-gray-600 text-sm">Browse vehicle fleet</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Loading statistics...</div>
          </div>
        ) : (
          stats && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      Total Bookings
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stats.totalBookings}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Pending</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stats.pendingBookings}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      Confirmed
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stats.confirmedBookings}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      Revenue (MAD)
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stats.totalRevenue.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-[#FFF9E6] rounded-full flex items-center justify-center">
                    <DollarSign className="text-[#D4AF37]" size={24} />
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Bookings
          </h2>

          {recentBookings.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No bookings yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
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
                      Total
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">
                        {booking.car_name}
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">
                            {booking.customer_name || "N/A"}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.customer_phone || "N/A"}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        {new Date(booking.start_date).toLocaleDateString()} -{" "}
                        {new Date(booking.end_date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        {booking.currency}
                        {booking.total_price}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 text-center">
            <a
              href="/admin/bookings"
              className="inline-block bg-[#D4AF37] hover:bg-[#C49B2C] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Bookings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
