// const transactions = [
//     { userId: 1, amount: 50, date: "2023-01-01" },
//     { userId: 2, amount: 20, date: "2023-01-02" },
//     { userId: 1, amount: 100, date: "2023-01-03" },
//     { userId: 3, amount: 150, date: "2023-01-04" },
//     { userId: 2, amount: 30, date: "2023-01-05" }
//     ];

//     function topSpenders(transactions){
//        var ob={};
//        var array=[];

//        for(let trans of transactions ){
//        const{userId}=trans;
//        if(ob[userId]){
//         ob[userId]++;

//        }
//        else{
//         ob[userId]=1;
//        }


//        }
    //    console.log(ob);
    // for(let key in ob){
    //     var count=1;
    //     if(ob[key]>count){
    //         array.push(key);


    //     }
       

    // }
    // console.log(array);



    // }
    // topSpenders(transactions);


    // const books = [
    //     	{ title: "Book A", author: "Author 1", genres: ["Fiction", "Mystery"] },
    //     	{ title: "Book B", author: "Author 2", genres: ["Non-fiction", "History"] },
    //     	{ title: "Book C", author: "Author 3", genres: ["Fiction", "History"] },
    //     	{ title: "Book D", author: "Author 4", genres: ["Mystery", "Thriller"] },
    //     ];

  
    // function genrecounter(books){

    //         var emptyob={};

    //     for(let book of books){
    //         for(let category of book.genres){
    //             if(emptyob[category]){
    //                 emptyob[category]++;

    //             }
    //             else{
    //                 emptyob[category]=1;
    //             }


    //         }
    //     }
    //     console.log(emptyob);

    // }

    // genrecounter(books);

 	
    // const orders = [
    //     	{ orderId: 1, tableNumber: 2, amount: 30 },
    //     	{ orderId: 2, tableNumber: 1, amount: 20 },
    //     	{ orderId: 3, tableNumber: 2, amount: 50 },
    //     	{ orderId: 4, tableNumber: 3, amount: 40 },
    //     	{ orderId: 5, tableNumber: 1, amount: 10 },
    //     ];

    //     function sumbytable(orders){
    //         var emptyob={};
    //         for(let order of orders){
    //             var tn=order.tableNumber;
    //             var amt=order.amount;

    //             if(emptyob[tn]){
    //                 emptyob[tn]=emptyob[tn]+amt;

    //             }
    //             else{
    //                 emptyob[tn]=amt;

    //             }

    //         }
    //         console.log(emptyob);

    //     }
    //     sumbytable(orders);


        const students = [
	{ name: "Alice", subjects: ["Math", "Science"] },
	{ name: "Bob", subjects: ["English", "Math"] },
	{ name: "Charlie", subjects: ["Math", "History"] },
	{ name: "David", subjects: ["Science", "History"] },
];


function subjectfinder(students){
    var emptyob={};
    for(let sub of students){
        for(let studies of sub.subjects){
            if(emptyob[studies]){
                emptyob[studies]++;

            }
            else{
                emptyob[studies]=1;
            }
        }
    }
    console.log(emptyob);

}


subjectfinder(students);



        
