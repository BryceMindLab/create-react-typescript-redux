import { unAuthAxiosCall } from './axiosCall';

export const login = async (email: string, password: string) =>
	unAuthAxiosCall('/api/authentication/users/login', {
		method: 'POST',
		body: JSON.stringify({
			email,
			password,
		}),
	});
