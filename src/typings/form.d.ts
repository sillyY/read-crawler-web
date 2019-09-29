declare namespace FormModule {
    // action 类型
    export interface FormLayout {
      labelCol: ILayout,
      wrapperCol: ILayout
    }

    export interface ILayout {
        xs: ISize
        sm: ISize
    }
    export interface ISize {
        span: Number
    }
  }