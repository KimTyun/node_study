const Sequelize = require('sequelize')

module.exports = class Capital extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            name: { type: Sequelize.STRING(100), allowNull: false },
         },
         {
            sequelize,
            timestamps: false, // createAt,updateAt 컬럼 자동생성
            underscored: false, // column의 이름을 카멜법으로 할것이지
            modelName: 'Capital', // 시퀄라이즈에서 사용하는 클래스 이름
            tableName: 'capitals', // 데이터베이스에서 사용하는 실제 테이블 이름
            paranoid: false, // 소프트 삭제 활성화(deleteAt column 생성)
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         },
      )
   }
   static associate(db) {
      db.Capital.belongsTo(db.Country, {
         foreignKey: 'CountryId',
         targetKey: 'id',
      })
   }
}
