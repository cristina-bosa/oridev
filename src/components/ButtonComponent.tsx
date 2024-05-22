const ButtonComponent = ({ label }: { label: string; }) => {
  return (
    <button className="btn bt--primary">
      {label}
    </button>
  )
}
export default ButtonComponent