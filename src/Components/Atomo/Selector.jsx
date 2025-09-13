function Selector({ valor, onCambio }) {
  return (
    <select value={valor} onChange={function(e) { onCambio(e.target.value === 'true') }}>
      <option value="true">Más recientes arriba</option>
      <option value="false">Más antiguas arriba</option>
    </select>
  )
}

export default Selector;