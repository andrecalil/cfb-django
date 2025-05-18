import { API_ROOT } from '@/constants';
import type { StoreType } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

const fetchStores = async () : Promise<StoreType[]> => {
    const response = await fetch(`${API_ROOT}/api/data/stores`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const useStores = () => {
    return useQuery({
        queryKey: ['stores'],
        queryFn: fetchStores,
    });
};

export default useStores;