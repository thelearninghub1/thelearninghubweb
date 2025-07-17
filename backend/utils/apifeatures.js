class ApiFeatures {
    constructor(query,queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    filter(){
      const keyword = {...this.queryStr}

      let removeFields = ["page","limit"]
      removeFields.forEach(field => delete keyword[field])
      this.query = this.query.find(keyword)
      return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1
        const skip = (currentPage - 1) * resultPerPage;
        this.query = this.query.skip(skip).limit(resultPerPage);
        
        return this; 
    }
}

module.exports = ApiFeatures;