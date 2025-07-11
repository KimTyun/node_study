const Sequelize = require('sequelize')

module.exports = class Hashtag extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            title: {
               type: Sequelize.STRING(15),
               allowNull: false,
               unique: true,
            },
         },
         {
            sequelize,
            timestamps: true, // createAt,updateAt 컬럼 자동생성
            underscored: false, // column의 이름을 카멜법으로 할것이지
            modelName: 'Hashtag', // 시퀄라이즈에서 사용하는 클래스 이름
            tableName: 'hashtags', // 데이터베이스에서 사용하는 실제 테이블 이름
            paranoid: false, // 소프트 삭제 활성화(deleteAt column 생성)
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         },
      )
   }
   static associate(db) {
      // n:m관계
      // through : 교차테이블 명
      db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' })
   }
}
