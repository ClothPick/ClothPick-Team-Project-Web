import { Temporal } from "@js-temporal/polyfill";

const handleTime = (boardCreateAt) => {
    // 현재 시간 구하기
    var today = Temporal.Now.plainDateTimeISO();
    // console.log(today.toString());
    // console.log(boardCreateAt);

    var Dday = Temporal.PlainDateTime.from(boardCreateAt);
    // console.log(Dday);

    const result = today.since(Dday);
    // console.log(result.toString());
    // console.log(result.days);
    // console.log(result.hours);
    // console.log(result.minutes);

    if (result.days === 0) {
        if (result.hours === 0) {
            if (result.minutes === 0) {
                return "방금 전";
            }
            else {
                return result.minutes + "분 전";
            }
        }
        else {
            return result.hours + "시간 전";
        }
    }
    else if (result.days < 7) {
        return result.days + "일 전";
    }
    else {
        return boardCreateAt.split("T")[0];
    }
}

const ConvenMethod = {
    handleTime,
}

export default ConvenMethod;