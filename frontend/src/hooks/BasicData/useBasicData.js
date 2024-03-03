import { useContext } from 'react';

import { BasicDataContext } from './BasicDataContext';

export const useBasicData = () => useContext(BasicDataContext);
