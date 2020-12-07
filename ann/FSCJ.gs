package ann
uses gw.lang.annotation.*

@AnnotationUsage(UsageTarget.TypeTarget, UsageModifier.One)
annotation FSCJ {
  function something(): String
}