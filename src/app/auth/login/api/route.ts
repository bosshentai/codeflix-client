import { loginValidation } from '@/app/lib/validations/loginValidation';
import { ZodFieldError } from '@/app/lib/validations/zodError';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const result = loginValidation.safeParse(await request.json());

  if (!result.success) {
    const formattedError = new ZodFieldError(result.error);

    return new NextResponse(JSON.stringify(formattedError), {
      status: 400,
    });
  }

  const { email, password } = result.data;

  console.log('email:' + email, 'password:' + password);
  return new NextResponse('It works');

  // try {
  //   const { email, password } = loginValidation.parse(await request.json());

  //   console.log('email:' + email, 'password:' + password);

  //   return new NextResponse('It works');
  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     // console.error(error.message);

  //     return new NextResponse(JSON.stringify({ error: error.message }), {
  //       status: 400,
  //     });
  //   } else {
  //     console.error('An unexpected error occurred:', error);
  //   }
  // }
}
