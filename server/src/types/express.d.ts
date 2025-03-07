// filepath: c:\Users\mrsch\source\Projects\Fizz\server\src\types\express.d.ts
import { User } from '../models/userModel'; // Adjust the import path as needed

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}