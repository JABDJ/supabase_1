// src/App.jsx
function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        ¡React, Tailwind y DaisyUI Funcionando!
      </h1>
      
      {/* Botones de DaisyUI */}
      <div className="flex gap-2">
        <button className="btn">Hola</button>
        <button className="btn btn-primary">Botón</button>
        <button className="btn btn-secondary">Mundo</button>
      </div>
    </div>
  )
}

export default App