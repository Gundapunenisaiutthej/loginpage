import React from 'react'
export const Page = () => {
  return (
    <div className='d-flex flex-row justify-content-center center-back'>
        <div className="background">
            <form>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='item-1'>
            <input className='input-item ' type="text" placeholder="User Name"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
</div>
          <div className='item-1'>
            <input className='input-item' type="password" placeholder="Passsword"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
</svg>
            </div>
            <div className=' flex'>
                <div><input type="checkbox" />
            <span className='text-light m-2'>Remember me</span>
            </div>
            <p className='text-light forgot'>Forgot password</p>
            </div>
           
            <button className='btn btn-primary text-dark button'>LOGIN</button>
            </div>
            </form>
        </div>
    </div>
  )
}
