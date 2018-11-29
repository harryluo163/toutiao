const config = {
    // 数据源的编码方式。
    // 默认为GBK,按需可修改为UTF-8等。
    // 如果输入的数据是用Excel编写的csv文件，那么大概率应该使用GBK。
    encoding: "GBK",

    // 每个时间节点最多显示的条目数。
    max_number: 20,

    // 控制是否显示顶部附加信息文字。
    showMessage: false,

    // !!!请确保打开此项时，使用的是标准日期格式！!!(即：YYYY-MM-DD HH:MM)
    // 时间自动排序。
    // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
    // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
    // 开启auto_sort可以实现时间的自动补间。
    auto_sort: false,

    // 倒序，使得最短的条位于最上方
    reverse: false,

    // 使用自定义的颜色，需要配置下面的color。
    // 如果为false，则随机配色。
    use_custom_color: true,

    // 颜色定义
    color: {
        '北京': '#bcd3bb',
        '上海': '#376956',
        '天津':'#f17677',
        '重庆':'#7b7c68',
        '成都':'#9dc5c8',
        '南京':'#e5b5b5',
        '广州':'#4777f5',
        '深圳':'#e88f70',
        '东莞':'#bda29a',
        '武汉':'#f0b489',
        '长沙':'#c3bed4',
        '惠州':'#495a80',
        '沈阳':'#9966cc',
        '长春':'#bdb76a',
        '大连':'#eee8ab',
        '昆山':'#a35015',
        '西安':'#04dd98',
        '贵州':'#c5c975',
        '常熟':'#476a54',
        '常州':'#376956',
        '佛山':'#66e638',
        '福州':'#a59619',
        '海口':'#822ee2',
        '杭州':'#49450d',
        '昆明':'#928ea8',
        '宁波':'#b95c25',
        '厦门':'#8f1ec2',
        '宁波':'#c3bed4',
        '苏州':'#36a15d',
        '郑州':'#edc1a5',
    },

    // 颜色绑定增长率
    changeable_color: false,

    // 附加信息内容。
    itemLabel: "左边文字",
    typeLabel: "右边文字",
    // 榜首项目信息的水平位置 。
    item_x: 400,

    // 时间点间隔时间。
    interval_time: 1.5,

    // 上方文字水平高度。
    text_y: 0,

    // 长度小于display_barInfo的bar将不显示barInfo。
    display_barInfo: 30,

    // 使用类型
    // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
    use_type_info: false,
    // 默认配色与name绑定，如果需要与类型绑定，即相同类型使用同种颜色，那么将divide_by_type属性置为true。
    // 如果不使用type（use_type_info : false），则divide_by_type无效。
    divide_by_type: true,

    // 使用计数器
    // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
    // 计数器会出现在右上角，记录着当前榜首的持续时间。
    use_counter: false,
    // 每个时间节点对于计数器的步长。
    // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
    step: 7,

    // 格式化数值
    // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
    format: ".0f",

    // 图表左右上下间距。
    left_margin: 60,
    right_margin: 70,
    top_margin: 10,
    bottom_margin: 0,
    // 时间标签坐标
    dateLabel_x: 130,
    dateLabel_y: 650,

    // 允许大于平均值的条消失时上浮。
    allow_up: false,

    // 设置动画效果，如果为true，则新进入的条目从0开始。
    enter_from_0: false,

    // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
    big_value: false,

    // 如果要使用半对数坐标，则开启此项
    use_semilogarithmic_coordinate: false,

    // barinfo太长？也许可以试试这个
    long: false,

};
