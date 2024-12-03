import { NextResponse,NextRequest } from "next/server";
interface Permission {
    delete: boolean;
    view: boolean;
    edit: boolean;
  }
  
  interface User {
    username: string;
    password: string;
    fullName: string;
    profilePic?: string;
    role: 'admin' | 'analyst' | 'inventory manager';
    permissions: Permission;
    status: 'active' | 'inactive';
  }
  
  // Mock database of users
  const demoUsers: User[] = [
    {
      username: 'admin_user',
      password: 'admin123',
      fullName: 'Admin User',
      role: 'admin',
      permissions: { delete: true, view: true, edit: true },
      status: 'active',
    },
    {
      username: 'analyst_user',
      password: 'analyst123',
      fullName: 'Analyst User',
      role: 'analyst',
      permissions: { delete: false, view: true, edit: true },
      status: 'active',
    },
    {
      username: 'inventory_user',
      password: 'inventory123',
      fullName: 'Inventory Manager',
      role: 'inventory manager',
      permissions: { delete: false, view: true, edit: false },
      status: 'active',
    },
  ];

  export async function POST(req: NextRequest) {
    try {
      // Parse the JSON body from the request
      const { username, password } = await req.json();
  
      // Validate input
      if (!username || !password) {
        return NextResponse.json(
          { message: 'Username or password is required' },
          { status: 400 }
        );
      }
  
      // Find the user in the mock database
      const user = demoUsers.find(
        (u) => u.username === username && u.password === password
      );
  
      // Check if user exists
      if (!user) {
        return NextResponse.json(
          { message: 'Invalid username or password' },
          { status: 401 }
        );
      }
  
      // Return user details if login is successful
      return NextResponse.json({
        message: 'Login successful',
        user: {
          username: user.username,
          fullName: user.fullName,
          role: user.role,
          permissions: user.permissions,
          status: user.status,
          profilePic: user.profilePic || null,
        },
      });
    } catch (error:any) {
      return NextResponse.json(
        { message: 'An unexpected error occurred', error: error.message },
        { status: 500 }
      );
    }
  }