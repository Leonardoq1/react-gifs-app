
export const GifItem = ({title, url, id}) => { //En los parametros estamos desestructurando las properties

  return (
    <div className="card">
        <img src= { url } alt= {title} />
        <p> { title } </p>
    </div>
  )
}
