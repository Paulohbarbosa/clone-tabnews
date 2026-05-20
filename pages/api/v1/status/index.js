function status(request, response) {
    response.status(200).json({ status: 'Estamos On-line!! É isso ai!!' });
}

export default status;