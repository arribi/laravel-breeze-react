import AppLayout from 'components/Layouts/AppLayout'

const Dashboard = () => (
  <AppLayout
    header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
      </h2>
    }>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            Bienvenido al panel de administración. Desde aquí podrás gestionar todos los elementos de la plataforma Conscientia.
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
)

export default Dashboard
