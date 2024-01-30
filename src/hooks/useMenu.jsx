
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [recommend ,setRecommend] = useState([])
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    // //   fetch("https://bistro-boss-server-seven-delta.vercel.app/menu")
    // //     .then((res) => res.json())
    // //     .then((data) => {
    // //         setMenu(data)
    // //         setRecommend(data)
    // //         setLoading(false)
    // //     })
    // // }, []);
    // return [recommend,menu,loading]
    const {data: menu=[], isPending:loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/menu');
            return res.data
        }
    })
    return [menu,loading,refetch]
};

export default useMenu;