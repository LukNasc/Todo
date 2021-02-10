import { Todo } from '../../interfaces/todo';
import { ApiServices } from './api_services';
const endpoint = 'todo';

export const TodoServices = {
    list() {
        return ApiServices.get(endpoint);
    },
    create(item: Todo) {
        return ApiServices.post(endpoint, item);
    },
    update(item: Todo) {
        return ApiServices.put(endpoint, item);
    },
    remove(id: number) {
        return ApiServices.delete(endpoint, id);
    }
}