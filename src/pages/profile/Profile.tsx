
// Assets
import Pfp from '../dashboard/../../assets/images/profile-images/pfp.png';
import ProfileIcon from '../dashboard/../../assets/images/profile-images/add-profile-icon.png';

const Profile = () => {

    document.title = "profile - Isaac Learning";

    const name = "John Adekola";

    return (
        <section className="pt-16 pb-194 px-80">

            <p className="font-[700] mb-10">My Profile</p>

            <div>

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

                <div>
                    <button>

                    </button>
                </div>

            </div>

        </section>
    )
}

export default Profile