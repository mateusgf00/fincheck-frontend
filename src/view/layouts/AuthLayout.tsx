import ilustration from '../../assets/ilustration.png'
import logo from '../../assets/logo.svg'

export function AuthLayout() {
  return(
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full"></div>

        <div className="w-1/2 h-full flex justify-center items-center p-8 relative">
          <img 
          src={ilustration}
          className=' object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]'
          />

          <div className='absolute bottom-8 max-w-[656px] bg-white p-10 rounded-b-[32px]'>
            <img src={logo} />
            <p className='text-gray-700 font-medium text-xl mt-6'>Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!</p>
          </div>
        </div>
      </div>
  )
}