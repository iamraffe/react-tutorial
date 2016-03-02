Restaurant.destroy_all

r = Restaurant.create! name: "Los Pollos Hermanos", description: "This is a description", address: "This is an address"

Comment.destroy_all

Comment.create! restaurant_id: r.id, author: "Jown", body: "This is the body", rank: 2
