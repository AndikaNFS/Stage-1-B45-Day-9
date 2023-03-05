let datas = []

function getData(event) {
    event.preventDefault();

    let title = document.getElementById("project-name").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("input-image").files;

    let nodejs = document.getElementById("nodejs").checked;
    let reactjs = document.getElementById("reactjs").checked;
    let java = document.getElementById("java").checked;
    let javascript = document.getElementById("javascript").checked;

    let icons = [nodejs, reactjs, java, javascript];

    image =  URL.createObjectURL(image[0])

    if (title == "") {
        return alert("Project Name is required")
    } else if (startDate == "") {
        return alert("Start Date is required")
    } else if (endDate == "") {
        return alert("End Date is required")
    } else if (description == "") {
        return alert("Description is required")
    }
    let data  = {
        title,
        description,
        image,
        startDate,
        endDate,
        icons,
    }

    datas.push(data)
    console.log(new Date(endDate)- new Date(startDate))
    console.log(datas)
    showData()
}

const showData = () => {
    document.getElementById("footer").innerHTML = ''
    for(let i = 0; i < datas.length; i++) {
        document.getElementById("footer").innerHTML += `
        <div class="row">
            <div class="column">
                <div class="card" style="width: 100%; justify-content:center; align-items: center;">

                    <div>
                        <img src="${datas[i].image}" width="300px" alt="">
                    </div>
                    <br />
                    <div class="in-card">
                        <a href="detail-project.html" style="text-decoration:none; color:black;"><span style="font-size: 20px; font-weight: bold; ">${datas[i].title}</span></a>
                        <div>
                            <span>durasi : ${getDuration(datas[i].startDate, datas[i].endDate)}
                            </span>
                            <p>${datas[i].description}</p>
                        </div>
                    </div>
                    
                    <div class="icon">
                    ${datas[i].icons[0] ? `<i class="fa-brands fa-node"></i>` : ""} 
                    ${datas[i].icons[1] ? `<i class="fa-brands fa-react"></i>` : ""} 
                    ${datas[i].icons[2] ? `<i class="fa-brands fa-java"></i>` : ""} 
                    ${datas[i].icons[3] ? `<i class="fa-brands fa-square-js"></i>` : ""} 
                    </div>
                    <div class="button-bottom">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
};

function createTime(time) {
    let years = time.getFullYear();
    let monthIndex = time.getMonth();
    let date = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${date} ${month[monthIndex]} ${years} ${hour}:${minute} WIB`;
}

const getDuration = (startTime, endTime) => {
    const distance = new Date(endTime) - new Date(startTime);
    const miliSecond = 1000;
    const yearDistance = Math.floor(
        distance / (12 * 4 * 7 * 24 * 60 * 60 * miliSecond)
    );
    if (yearDistance > 0) {
        return yearDistance + " Years Ago";
      } else {
        const monthDistance = Math.floor(
          distance / (4 * 7 * 24 * 60 * 60 * miliSecond)
        );
        if (monthDistance > 0) {
          return monthDistance + " Month Ago";
        } else {
          const weekDistance = Math.floor(
            distance / (7 * 24 * 60 * 60 * miliSecond)
          );
          if (weekDistance > 0) {
            return weekDistance + " Week Ago";
          } else {
            const dayDistance = Math.floor(distance / (24 * 60 * 60 * miliSecond));
            if (dayDistance > 0) {
              return dayDistance + " Day Ago";
            } else {
              const closeDistance = Math.floor(distance / (60 * 60 * miliSecond));
              if (closeDistance > 0) {
                return "Just Now";
              } else {
                if (closeDistance < 0) {
                  return alert(
                    "Tanggal tidak valid : Start Date harus > dari End Date"
                  );
                }
              }
            }
          }
        }
      }
    // const distance = new Date() - new Date(time);

    // const dayDistance = Math.floor(distance / (24 * 60 * 60 * miliSecond))
    // if(dayDistance > 0 ) {
    //     return dayDistance + "Day Ago"
    // } else {
    //     const hourDistance = Math.floor(distance / (60 * 60 * miliSecond))
    //     if(hourDistance != 0) {
    //         return hourDistance + "Hour Ago"
    //     } else {
    //         const minuteDistance = Math.floor(distance / (60 * miliSecond))
    //         if(minuteDistance >= 1) {
    //             return minuteDistance + "minute Ago"
    //         } else {
    //             const secondDistance = Math.floor(distance / (miliSecond))
    //             if(secondDistance != 0) {
    //                 return secondDistance + "second Ago"
    //             }
    //         }
    //     }
    // }
};

setInterval(showData, 1000)