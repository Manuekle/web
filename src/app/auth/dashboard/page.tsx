export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Total Empleados</h2>
          <p className="mt-2 text-3xl font-bold">120</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Presentes Hoy</h2>
          <p className="mt-2 text-3xl font-bold">98</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Ausentes</h2>
          <p className="mt-2 text-3xl font-bold">22</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">
            Llegadas Tardías
          </h2>
          <p className="mt-2 text-3xl font-bold">8</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Actividad Reciente
          </h2>
          <div className="space-y-4">
            {/* Aquí irían los registros de actividad reciente */}
            <p className="text-gray-500">Cargando actividad reciente...</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Asistencia Semanal
          </h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Gráfico de asistencia semanal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
