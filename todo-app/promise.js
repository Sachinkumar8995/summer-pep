function getCategories() {
    return new Promise((resolve, reject) => {
        // Simulate an API call to fetch categories
        setTimeout(() => {
            const categories = [
                { id: 1, name: "Work" },
                { id: 2, name: "Personal" },
                { id: 3, name: "Shopping" }
            ];
            resolve(categories);
        }, 1000);
    });
}

getCategories()
    .then(categories => {
        console.log("Categories fetched:", categories);
    })
    .catch(error => {
        console.error("Error fetching categories:", error);
    });

    