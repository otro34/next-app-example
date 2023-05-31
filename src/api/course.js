import axios from 'axios'

const get = async ()=> {
    return axios.get('https://6476aec29233e82dd53a4209.mockapi.io/api/v1/claseapi/1');
}

const Course = { get }

export default Course