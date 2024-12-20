# frozen_string_literal: true

# This is the top level comment
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
