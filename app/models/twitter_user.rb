class TwitterUser < ActiveRecord::Base
  has_many :tweets


  def tweets_stale?
    if !self.tweets.empty?
      minutes_passed_since_last_tweet = (Time.now - self.tweets.first.created_at)/60
      minutes_passed_since_last_tweet > 15 ? true : false
    else
      true
    end
  end
end
