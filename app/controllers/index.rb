get '/' do

  erb :index
end

get '/:username' do
  @user = TwitterUser.find_or_create_by(:username => params[:username])
  puts @user.inspect

  if @user.tweets_stale?
    puts "stale"
    @tweets = Twitter.user_timeline(params[:username], :count => 3).map {|t| t.text }
    @tweets.each do |t|
      @user.tweets << Tweet.create(tweet_body: t)
    end
  else
    puts "not stale"
    @tweets = Tweet.where(:twitter_user => @user).take(3).map { |t| t.tweet_body }
  end

  if request.xhr?
    puts "pre partial"
    erb :_display_tweets, :layout => false
  end
end






#POST A TWEET
post '/tweet' do
  if params[:tweet].length <= 140
    Twitter.update(params[:tweet])
  end
end
