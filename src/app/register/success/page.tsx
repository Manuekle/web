import Link from "next/link";

export default function RegisterSuccess() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md text-center">
        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">¡Registro Exitoso!</h1>

        <p className="text-gray-600">
          Tu empresa ha sido registrada correctamente en nuestro sistema de
          control de asistencia.
        </p>

        <div className="mt-6">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Iniciar Sesión
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Si tienes alguna pregunta, no dudes en contactar a nuestro equipo de
          soporte.
        </p>
      </div>
    </div>
  );
}
