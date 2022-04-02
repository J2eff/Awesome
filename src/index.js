import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppNavigator} from  '@navigator'
import store from './store'
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <NavigationContainer>
                    <AppNavigator></AppNavigator>
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>

    );
}

export default App;
