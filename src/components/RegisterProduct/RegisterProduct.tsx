import '../RegisterProduct/RegisterProductStyle.sass'

export default function RegisterProduct() {
  return (
    <div className="box-high">
      <div className="bg-red-200 box">
        <p>Cadastrar produto</p>
        <input placeholder="Nome"/>
        <input placeholder="Valor"/>
        <input placeholder="Quantidade"/>
        <input placeholder="Imagem"/>
      </div>
    </div>
  )
}