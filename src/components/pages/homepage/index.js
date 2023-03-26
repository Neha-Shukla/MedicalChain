import doctorImg from "./../../../assets/doctor.png"
import hospitalImg from "./../../../assets/hospital.png"
import patientImg from "./../../../assets/patient.png"
import receptionImg from "./../../../assets/reception.png"

export default function Home() {
    return (
        <div className="flex space-x-3 justify-center mt-32 h-60 ">
            <div class="max-w-sm rounded overflow-hidden shadow-lg pt-3 hover:bg-purple-900 hover:text-white  hover:scale-110 duration-500">
                <img class="h-9 w-11 object-contain" src={hospitalImg} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Are you Hospital</div>

                </div>
                <div class="px-6 pt-4 pb-2 flex flex-col items-center">
                    <button class="bg-white hover:bg-gray-100 hover:scale-110 duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>{
                        window.location.href="/login/Hospital"
                    }}>
                        Login
                    </button></div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg pt-3  hover:bg-purple-900 hover:text-white  hover:scale-110 duration-500">
                <img class="h-9 w-11 object-contain" src={doctorImg} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Are you Doctor</div>

                </div>
                <div class="px-6 pt-4 pb-2 flex flex-col items-center">
                    <button class="bg-white hover:bg-gray-100 hover:scale-110 duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>{
                        window.location.href="/login/Doctor"
                    }}>
                        Login
                    </button></div>
            </div>


            <div class="max-w-sm rounded overflow-hidden shadow-lg pt-3  hover:bg-purple-900 hover:text-white  hover:scale-110 duration-500">
                <img class="h-9 w-11 object-contain" src={receptionImg} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Are you Reception</div>

                </div>
                <div class="px-6 pt-4 pb-2 flex flex-col items-center">
                    <button class="bg-white hover:bg-gray-100 hover:scale-110 duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>{
                        window.location.href="/login/Reception"
                    }}>
                        Login
                    </button></div>
            </div>


            <div class="max-w-sm rounded overflow-hidden shadow-lg pt-3  hover:bg-purple-900 hover:text-white  hover:scale-110 duration-500">
                <img class="h-9 w-11 object-contain" src={patientImg} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Are you patient</div>

                </div>
                <div class="px-6 pt-4 pb-2 flex flex-col items-center">
                    <button class="bg-white hover:bg-gray-100 hover:scale-110 duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"onClick={()=>{
                        window.location.href="/login/Patient"
                    }}>
                        Login
                    </button></div>
            </div>
        </div>
    )
}