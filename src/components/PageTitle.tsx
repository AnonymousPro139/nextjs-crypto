function PageTitle({ text }: {text: string}) {
    return (
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center  mt-4 py-2 sm:py-4" style={{color: "#485FC7"}}>
        {text}
      </h1>
    )
  }
  
  export default PageTitle
  