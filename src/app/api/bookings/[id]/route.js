import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

// Get a single booking
export async function GET(request, { params }) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    const result = await sql`
      SELECT * FROM bookings WHERE id = ${id}
    `;

    if (result.length === 0) {
      return Response.json({ error: "Booking not found" }, { status: 404 });
    }

    return Response.json({ booking: result[0] });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return Response.json({ error: "Failed to fetch booking" }, { status: 500 });
  }
}

// Update a booking
export async function PUT(request, { params }) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    const body = await request.json();

    const setClauses = [];
    const values = [];
    let paramCount = 1;

    if (body.car_id !== undefined) {
      setClauses.push(`car_id = $${paramCount++}`);
      values.push(body.car_id);
    }
    if (body.car_name !== undefined) {
      setClauses.push(`car_name = $${paramCount++}`);
      values.push(body.car_name);
    }
    if (body.customer_name !== undefined) {
      setClauses.push(`customer_name = $${paramCount++}`);
      values.push(body.customer_name);
    }
    if (body.customer_phone !== undefined) {
      setClauses.push(`customer_phone = $${paramCount++}`);
      values.push(body.customer_phone);
    }
    if (body.start_date !== undefined) {
      setClauses.push(`start_date = $${paramCount++}`);
      values.push(body.start_date);
    }
    if (body.end_date !== undefined) {
      setClauses.push(`end_date = $${paramCount++}`);
      values.push(body.end_date);
    }
    if (body.total_days !== undefined) {
      setClauses.push(`total_days = $${paramCount++}`);
      values.push(body.total_days);
    }
    if (body.price_per_day !== undefined) {
      setClauses.push(`price_per_day = $${paramCount++}`);
      values.push(body.price_per_day);
    }
    if (body.total_price !== undefined) {
      setClauses.push(`total_price = $${paramCount++}`);
      values.push(body.total_price);
    }
    if (body.currency !== undefined) {
      setClauses.push(`currency = $${paramCount++}`);
      values.push(body.currency);
    }
    if (body.status !== undefined) {
      setClauses.push(`status = $${paramCount++}`);
      values.push(body.status);
    }

    if (setClauses.length === 0) {
      return Response.json({ error: "No fields to update" }, { status: 400 });
    }

    const query = `UPDATE bookings SET ${setClauses.join(", ")} WHERE id = $${paramCount} RETURNING *`;
    values.push(id);

    const result = await sql(query, values);

    if (result.length === 0) {
      return Response.json({ error: "Booking not found" }, { status: 404 });
    }

    return Response.json({ booking: result[0] });
  } catch (error) {
    console.error("Error updating booking:", error);
    return Response.json(
      { error: "Failed to update booking" },
      { status: 500 },
    );
  }
}

// Delete a booking
export async function DELETE(request, { params }) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    const result = await sql`
      DELETE FROM bookings WHERE id = ${id} RETURNING *
    `;

    if (result.length === 0) {
      return Response.json({ error: "Booking not found" }, { status: 404 });
    }

    return Response.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return Response.json(
      { error: "Failed to delete booking" },
      { status: 500 },
    );
  }
}
