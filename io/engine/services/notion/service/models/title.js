


const _property = (title = "Test Title") => {
    const response = {
        title: [
            {
                text: {
                    content: title
                }
            }
        ]
    }

    return response;
}

export default _property;