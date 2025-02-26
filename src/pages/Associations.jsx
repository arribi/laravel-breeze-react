import AppLayout from 'components/Layouts/AppLayout'
import AsociationsList from './AsociationsList'

const Associations = () => (
  <AppLayout
    header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Listado de asociaciones
      </h2>
    }>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <AsociationsList />
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
)

export default Associations
