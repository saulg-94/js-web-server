



class APIFeatures {
    constructor(query, queryString) {
      this.query = query, this.queryString = queryString
    }
  
    filter() {
      // BUILD QUERY
      // 1A) Filtering
      const queryObj = { ...this.queryString };
      const excludedFields = ["page", "limit", "sort", "fields"];
      excludedFields.forEach((el) => delete queryObj[el]);
      
      console.log("success query log from getAllContent api endpoint");
      // 1B) Advanced Filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      
      
      this.query = this.query.find(JSON.parse(queryStr));
      return this;
      
    }
  
    sort() {
      // 2) SORTING
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(",").join(" ");
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort("-createdAt");
      }
      return this;
    }
  
    limitFields(){
  
      // 3) FIELD Limiting
      if (this.queryString.fields) {
          const fields = this.queryString.fields.split(",").join(" ");
          this.query = this.query.select(fields);
        } else {
          this.query = this.query.select("-__v"); // this line excludes the string value is the field-name within mongoDB documents Model schemas'
        }
  
  
      return this;
    }
  
    paginate(){
  
      // 4) Pagination
      const page = this.queryString.page * 1 || 1;
      const limit = this.queryString.limit * 1 || 100;
      const skip = (page - 1) * limit;
  
      this.query = this.query.skip(skip).limit(limit);
  
  
      return this;
    }
  }

  export default APIFeatures