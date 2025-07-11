const Sequelize = require('sequelize')

//class명은 파일명과 똑같이 작성하되 대문자로 시작
module.exports = class User extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            //name컬럼 정의
            name: {
               type: Sequelize.STRING(20),
               allowNull: false,
               unique: true,
            },
            //age column
            age: {
               type: Sequelize.INTEGER.UNSIGNED,
               allowNull: false,
            },
            //married column
            married: {
               type: Sequelize.BOOLEAN,
               allowNull: false,
            },
            comment: {
               type: Sequelize.TEXT,
               allowNull: false,
            },
            create_at: {
               type: Sequelize.DATE,
               allowNull: false,
               defaultValue: Sequelize.NOW,
            },
         },
         {
            sequelize,
            timestamps: false, // createAt,updateAt 컬럼 자동생성
            underscored: false, // column의 이름을 카멜법으로 할것이지
            modelName: 'User', // 시퀄라이즈에서 사용하는 클래스 이름
            tableName: 'users', // 데이터베이스에서 사용하는 실제 테이블 이름
            paranoid: false, // 소프트 삭제 활성화(deleteAt column 생성)
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         },
      )
   }
   static associate(db) {
      //User가 Comment를 가지고 있다.
      db.User.hasMany(db.Comment, {
         foreignKey: 'commenter', // comments 테이블에서 사용할 이름
         sourceKey: 'id', // user테이블에서 제공할 키
      })
   }
}
