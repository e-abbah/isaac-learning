// React Router Hooks
import { NavLink, Outlet } from 'react-router-dom';


// Assets
import Pfp from '../../assets/images/profile-images/pfp.png';
import ProfileIcon from '../../assets/images/profile-images/add-profile-icon.png';
import EditIcon from '../../assets/images/icons/dashboard-icons/Edit.png';

const Profile = () => {

    document.title = "profile - Isaac Learning";

    const name = "John Adekola";

    return (
        <section className="pt-16 pb-194 px-30">

            <p className="font-[700] mb-10 text-[20px]">My Profile</p>


            <div className='flex justify-between items-center bg-gradient-to-r from-[#00a36c] to-[#003d28] pt-10 px-20 rounded-tl-[20px] rounded-tr-[20px] mb-[32px] w-[1400px]'>

                <div className='flex align-center gap-[20px]'>

                    <div className='relative'>
                        <img src={Pfp} className='mb-20 w-[130px] h-[130px]' alt='profile image' />
                        <img src={ProfileIcon} className='w-[30px] h-[30px] absolute right-[-10px] top-[60px]' alt='pick profile image icon' />
                    </div>

                    <div>
                        <h3 className='font-[700] text-[#fff] text-[32px] '>{name}</h3>
                        <p className='max-w-[423px] text-[#fff]'>
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

            <nav className=' flex align-center'>
                <NavLink to='progress-summary' className={'py-[10px]  text-primary-green px-[100px] border-primary-green border-b-[5px] font-[700]'}>Progress Summary</NavLink>
                <NavLink to='activity' className={'py-[10px] px-[150px] border-b-[1px] border-[#000]'} >Activity</NavLink>
                <NavLink to='bookmarks' className={'py-[10px] px-[150px] border-b-[1px] border-[#000]'}>Bookmarks</NavLink>
                <NavLink to='settings' className={'py-[10px] px-[130px] border-b-[1px] border-[#000]'}>Settings</NavLink>
            </nav>

            <Outlet />






        </section>
    )
}

export default Profile