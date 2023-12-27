export const color = [
    "white",
    "black",
    "Red",
    "Maroon",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
    "Blue",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "black", label: "Black"},
            {value: "red", label: "Red"},
            {value: "maroon", label: "Maroon"},
            {value: "beige", label: "Bhite"},
            {value: "pink", label: "Pink"},
            {value: "green", label: "Green"},
            {value: "yellow", label: "Yellow"},
            {value: "blue", label: "Blue"},
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
            {value: "XL", label: "XL"},
            {value: "XXL", label: "XXL"}
        ]
    },
]

export const singleFilter = [
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In stock"},
            {value: "out_of_stock", label: "Out of stock"}
        ]
    },
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "₹ 159 to ₹ 399"},
            {value: "399-999", label: "₹ 399 to ₹ 999"},
            {value: "999-1999", label: "₹ 999 to ₹ 1999"},
            {value: "1999-2999", label: "₹ 1999 to ₹ 2999"},
            {value: "3999-4999", label: "₹ 3999 to ₹ 4999"},
        ]
    },
    {
        id: "discount",
        name: "Discount range",
        options: [
            {value: "10", label: "10% and above"},
            {value: "20", label: "20% and above"},
            {value: "30", label: "30% and above"},
            {value: "40", label: "40% and above"},
            {value: "50", label: "50% and above"},
            {value: "60", label: "60% and above"},
            {value: "70", label: "70% and above"},
            {value: "80", label: "80% and above"},
        ]
    }
]

export const sortOptions = [
    {name: "Price: Low to High", query: "price_low", current: false},
    {name: "Price: High to Low", query: "price_high", current: false},
]