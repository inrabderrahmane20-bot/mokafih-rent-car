import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

// Get all bookings
export async function GET(request) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = await sql`
      SELECT * FROM bookings 
      ORDER BY created_at DESC
    `;

    return Response.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return Response.json(
      { error: "Failed to fetch bookings" },
      { status: 500 },
    );
  }
}

// Create a new booking
export async function POST(request) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      car_id,
      car_name,
      customer_name,
      customer_phone,
      start_date,
      end_date,
      total_days,
      price_per_day,
      total_price,
      currency,
      status,
    } = body;

    const result = await sql`
      INSERT INTO bookings (
        car_id, car_name, customer_name, customer_phone,
        start_date, end_date, total_days, price_per_day,
        total_price, currency, status
      ) VALUES (
        ${car_id}, ${car_name}, ${customer_name}, ${customer_phone},
        ${start_date}, ${end_date}, ${total_days}, ${price_per_day},
        ${total_price}, ${currency}, ${status || "pending"}
      )
      RETURNING *
    `;

    return Response.json({ booking: result[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return Response.json(
      { error: "Failed to create booking" },
      { status: 500 },
    );
  }
}
