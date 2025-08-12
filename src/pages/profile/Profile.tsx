
// Assets
import Pfp from '../dashboard/../../assets/images/profile-images/pfp.png';
import ProfileIcon from '../dashboard/../../assets/images/profile-images/add-profile-icon.png';
import EditIcon from '../dashboard/../../assets/images/icons/Edit.png'

const Profile = () => {

    document.title = "profile - Isaac Learning";

    const name = "John Adekola";

    return (
        <section className="pt-16 pb-194 px-80">

            <p className="font-[700] mb-10">My Profile</p>

            <div className='flex justify-between align-center bg-[#00a36cff] py-50 px-40'>

                <div className='flex align-center gap-[20px]'>

                    <div className='relative'>
                        <img src={Pfp} className='mb-20' alt='profile image' />
                        <img src={ProfileIcon} className='w-[30px] h-[30px] absolute right-[-10px] top-[60px]' alt='pick profile image icon' />
                    </div>

                    <div>
                        <h3 className='font-[700] text-[#000] text-[32px] '>{name}</h3>
                        <p className='max-w-[423px]'>
                            Aspiring HR professional, passionate about people, learning,
                            and workplace impact. Exploring the future of HR one course
                            at a time.
                        </p>
                    </div>
                </div>

                <button className='flex align-center justify-center gap-[8px] bg-[#fcfcfc]  h-[50px] w-[137px] py-[15px] rounded-[10px]'>
                    <p className='text-[#00a36cff] font-bold'>Edit bio</p>
                    <img src={EditIcon} className='w-[25px] h-[25px]' alt='edit icon' />
                </button>

            </div>



        </section>
    )
}

export default Profile