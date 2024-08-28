// app/api/users/route.js
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User"; // Defina seu modelo de usuário

export async function POST(request) {
  try {
    await connectToDatabase();

    const { name, email } = await request.json();
    const newUser = new User({ name, email });
    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// GET para listar usuários
export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({}); // Busca todos os usuários
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error("Error occurred while fetching users:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
