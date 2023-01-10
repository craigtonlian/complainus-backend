class Post < ApplicationRecord
  belongs_to :user
  belongs_to :tag
  has_many :comments

  validates :title, presence: true, length: { minimum: 2 }
  validates :body, presence: true, length: { minimum: 2, maximum: 1000 }
  validates :user_id, presence: true
  validates :tag_id, presence: true
end
