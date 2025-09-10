const Service = ({ icon, title, text, removeService }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
      {/* 删除按钮 */}
      {removeService && (
        <button className='btn' onClick={removeService}>
          Remove
        </button>
      )}
    </article>
  )
}

export default Service