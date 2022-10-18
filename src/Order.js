


function Order() {
        const todayTime = () => {
            let now = new Date();  // 현재 날짜 및 시간
            let todayYear = now.getFullYear(); 
            let todayMonth = now.getMonth() + 1;
            let todayDate = now.getDate();
            const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            let dayOfWeek = week[now.getDay()];
    
            return todayYear + '.' + todayMonth + '.' + todayDate + dayOfWeek;
        }
    return(
        <div className="order">
            <h1 style={{margin:'50px auto'}}>주문완료!</h1>
            <hr />
            <h4>Order Number : 000000-123456</h4>
            <h4>Order Date : {todayTime().slice(0, 9)} {todayTime().slice(10, 13)}
            </h4>
            <h4>Shipping Method : Standard</h4>
            <p>영업일 기준 1~3일 이내 배송될 것입니다.</p>
        </div>
    )
};

export default Order;