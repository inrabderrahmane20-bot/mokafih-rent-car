import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

export async function GET(request) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get total bookings
    const totalBookingsResult = await sql`
      SELECT COUNT(*) as count FROM bookings
    `;
    const totalBookings = parseInt(totalBookingsResult[0].count);

    // Get pending bookings
    const pendingBookingsResult = await sql`
      SELECT COUNT(*) as count FROM bookings WHERE status = 'pending'
    `;
    const pendingBookings = parseInt(pendingBookingsResult[0].count);

    // Get confirmed bookings
    const confirmedBookingsResult = await sql`
      SELECT COUNT(*) as count FROM bookings WHERE status = 'confirmed'
    `;
    const confirmedBookings = parseInt(confirmedBookingsResult[0].count);

    // Get total revenue
    const revenueResult = await sql`
      SELECT SUM(total_price) as total FROM bookings WHERE status = 'confirmed'
    `;
    const totalRevenue = parseFloat(revenueResult[0].total) || 0;

    // Get upcoming bookings (next 30 days)
    const upcomingResult = await sql`
      SELECT COUNT(*) as count FROM bookings 
      WHERE start_date >= CURRENT_DATE 
      AND start_date <= CURRENT_DATE + INTERVAL '30 days'
      AND status != 'cancelled'
    `;
    const upcomingBookings = parseInt(upcomingResult[0].count);

    return Response.json({
      stats: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        totalRevenue,
        upcomingBookings,
      },
    });
  } catch (error) {
    console.error("Error fetching booking stats:", error);
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
