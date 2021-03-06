window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Wins by Various Teams from 2008-2021"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 35.71, label: "Mumbai Indians" },
                { y: 21.43, label: "Chennai Super Kings" },
                { y: 14.29, label: "Kolkata Knight Riders" },
                { y: 7.14, label: "Rajasthan Royals" },
                { y: 14.29, label: "Sunrisers Hyderabad" },
                { y: 7.14, label: "Royal Challengers Bangalore" }
                
                
            ]
        }]
    });
    chart.render();
    
    }
$(document).ready(function(){
    var teamList=[{
        teamName:"KKR",
        teamIcon:"https://www.searchpng.com/wp-content/uploads/2019/02/Kolkata-Knight-Riders-Logo-PNG-Image-1024x1024.png",
        playerCount:17,
        topBatsman:"Andre Russell",
        topBowler:"Varun Chakravarthy",
        winningStreak:2
    },
    {
        teamName:"CSK",
        teamIcon:"https://i.pinimg.com/originals/ea/40/fd/ea40fd13fa7d46618c5567146f07ba41.png",
        playerCount:25,
        topBatsman:"Ruturaj Gaikwad",
        topBowler:"Dwayne Bravo",
        winningStreak:4
    },
    {
        teamName:"MI",
        teamIcon:"https://th.bing.com/th/id/R.354e03e0127358036082a9fd6166c6e9?rik=piIGU2XUBurikA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f04%2fMumbai-Indians-Logo-PNG.png&ehk=tmeZwa2lUNe89H8GizIxtxeDPGvQQHdSyH0Ayl3KXoo%3d&risl=&pid=ImgRaw",
        playerCount:21,
        topBatsman:"Rohit Sharma",
        topBowler:"JASPRIT BUMRAH",
        winningStreak:5
    },
    {
        teamName:"DC",
        teamIcon:"https://d1q6kvh8ntrf2h.cloudfront.net/s3fs-public/vendor/ipl_dclogo.png",
        playerCount:19,
        topBatsman:"RISABH PANT",
        topBowler:"Avesh Khan",
        winningStreak:0
    },
    {
        teamName:"RCB",
        teamIcon:"https://th.bing.com/th/id/R.245d565e5fa3e4fed45bd04d2da6c082?rik=H6zA0PgwW0gw3w&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2020%2f02%2froyal_challengers_bangalore_logo.png&ehk=Shn9XwpnaupWdKZ0vQ90IpiiECYu%2bnlEANzV%2fK%2fGWIE%3d&risl=&pid=ImgRaw",
        playerCount:12,
        topBatsman:"Devdutt Padikkal",
        topBowler:"Yuzvendra Chahal",
        winningStreak:0
    },
    {
        teamName:"KXIP",
        teamIcon:"https://th.bing.com/th/id/OIP.clSKSkoGpEotIgSpPRriFgHaIX?pid=ImgDet&rs=1",
        playerCount:16,
        topBatsman:"Mayank Agarwal",
        topBowler:"Mohammad Shami",
        winningStreak:0
    },
    {
        teamName:"SH",
        teamIcon:"https://www.searchpng.com/wp-content/uploads/2019/02/Sunrisers-Hyderabad-Logo-PNG-Image-1024x1024.png",
        playerCount:22,
        topBatsman:"Kane Williamson",
        topBowler:"Bhuvneshwar Kumar",
        winningStreak:2
    },
    {
        teamName:"RR",
        teamIcon:"https://www.searchpng.com/wp-content/uploads/2019/02/Rajasthan-Royals-Logo-PNG-Image-1024x1024.png",
        playerCount:17,
        topBatsman:"JOSH BUTTLER",
        topBowler:"Yuzvendra Chahal",
        winningStreak:1
    },
    {
        teamName:"GT",
        teamIcon:"https://img.jagranjosh.com/images/2022/February/2122022/gujarat_titans_team_logo.jpg",
        playerCount:6,
        topBatsman:"HARDIK PADYA",
        topBowler:"Rashid Khan",
        winningStreak:0
    },
    {
        teamName:"LSG",
        teamIcon:"https://www.sportstiger.com/wp-content/uploads/2022/03/Untitled-2-7.jpg",
        playerCount:6,
        topBatsman:"KL RAHUL",
        topBowler:"Abhishek Sharma",
        winningStreak:0
    }];
    $(".card").click(function(){
        for(var i=0;i<teamList.length;i++){
            if($(this).find(".card-title").html()==teamList[i].teamName){
                localStorage.setItem("teamDetails",JSON.stringify(teamList[i]));
                location.assign("team/teams.html");
            }
        }
    })
    $('.search-input-box').on("keyup", function() {
        var value = $(this).val().toUpperCase();
        $(".card").each(function(){
            var found="false";
            var title=$(this).children(".card-img-overlay").children(".card-title").html();
            if(title.indexOf(value)>=0)
            found="true";
            if(found=="true")
            $(this).show();
            else
            $(this).hide();
        });
      });
})